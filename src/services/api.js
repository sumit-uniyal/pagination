export const fetchEmployees = async () => {
  const res = await fetch(
    'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'
  );

  if (!res.ok) {
    throw new Error('failed to fetch data');
  }

  return res.json();
};
