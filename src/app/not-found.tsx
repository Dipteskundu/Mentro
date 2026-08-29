import ErrorPage from "@/components/error/ErrorPage";

export default function NotFound() {
  return (
    <ErrorPage
      errorCode="404"
      title="Page Not Found"
      description="The page you're looking for doesn't exist or has been moved. Let's get you back on track."
      showSearch={true}
    />
  );
}
