export default function Page({ params }: { params: { subject: string } }) {
  return <div>subject {params.subject}</div>;
}
