export function calcDate(date = new Date()) {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format();
}

export function actionResponse(
  status: 'success' | 'fail' | 'error',
  message: string,
  data: string | null
) {
  return {
    status,
    message,
    data,
  };
}
