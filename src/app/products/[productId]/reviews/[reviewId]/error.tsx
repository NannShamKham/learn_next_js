"use client"
const ErrorBoundary = ({error,reset}: {error: Error;reset:()=>void;}) => {
  return (
    <div>error in review {error.message} <button onClick={reset}>Try Again</button></div>
  )
}

export default ErrorBoundary