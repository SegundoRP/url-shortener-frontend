const Loading = () => (
  <div className="d-flex justify-content-center flex-column align-items-center vh-100">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="mt-3 fw-semibold">Loading</div>
  </div>
);

export default Loading;
