"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";
import { workshops } from "@/data";
import { Workshop } from "@/types";
import { checkConflict, ConflictResult } from "@/utils/conflictDetection";
import { useRouter } from "next/navigation";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  workshop: Workshop;
}

export default function RegistrationModal({
  isOpen,
  onClose,
  workshop,
}: RegistrationModalProps) {
  const { state, dispatch } = useApp();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [conflictResult, setConflictResult] =
    useState<ConflictResult | null>(null);
  const [showConflict, setShowConflict] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function resetForm() {
    setName("");
    setEmail("");
    setNameError("");
    setEmailError("");
    setConflictResult(null);
    setShowConflict(false);
    setIsSuccess(false);
  }

  function handleClose() {
    resetForm();
    onClose();
  }

  function validate(): boolean {
    let valid = true;

    if (!name.trim()) {
      setNameError("Name is required");
      valid = false;
    } else {
      setNameError("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email");
      valid = false;
    } else {
      setEmailError("");
    }

    return valid;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    const result = checkConflict(
      workshop,
      state.registrations,
      workshops
    );

    if (result.hasConflict && !showConflict) {
      setConflictResult(result);
      setShowConflict(true);
      setIsSubmitting(false);
      return;
    }

    registerWorkshop();
  }

  function registerWorkshop() {
    dispatch({
      type: "REGISTER_WORKSHOP",
      payload: {
        id: `reg-${Date.now()}`,
        workshopId: workshop.id,
        name: name.trim(),
        email: email.trim(),
        registeredAt: new Date().toISOString(),
      },
    });

    setIsSubmitting(false);
    setIsSuccess(true);

  }

  function handleProceedAnyway() {
    setIsSubmitting(true);
    registerWorkshop();
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Register for Workshop" size="sm">
      {isSuccess ? (
        <div className="py-10 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-green-500/20">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Registration Successful!
          </h3>
          <p className="text-sm text-gray-500">
            You&apos;re registered for {workshop.title}
          </p>
          <Button className="mt-6" onClick={() => { handleClose(); router.push("/my-learning"); }}>
            View my schedule
          </Button>
        </div>
      ) : showConflict && conflictResult ? (
        <div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-5">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <div>
                <h4 className="font-bold text-amber-800">
                  Schedule Conflict Detected
                </h4>
                <p className="text-sm text-amber-700 mt-1">
                  This workshop overlaps with:
                </p>
                <ul className="mt-3 space-y-2">
                  {conflictResult.conflictingWorkshops.map((cw) => {
                    const formattedDate = new Intl.DateTimeFormat("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    }).format(new Date(cw.date));
                    return (
                      <li
                        key={cw.id}
                        className="text-sm text-amber-800 bg-amber-100 rounded-xl px-4 py-3"
                      >
                        <span className="font-semibold">{cw.title}</span>
                        <br />
                        <span className="text-amber-600">
                          {formattedDate} · {cw.duration}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={handleProceedAnyway}
              isLoading={isSubmitting}
              className="flex-1"
            >
              Register Anyway
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <Input
              label="Full Name"
              placeholder="Enter your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={nameError}
              disabled={isSubmitting}
            />
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              disabled={isSubmitting}
            />
          </div>

          <div className="flex gap-3 mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isSubmitting}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              isLoading={isSubmitting}
              className="flex-1"
            >
              Register
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
