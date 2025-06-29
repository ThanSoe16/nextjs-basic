export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; itemId: string }>;
}) {
  const { slug, itemId } = await params;
  return (
    <div>
      My Post: {slug} {itemId}
    </div>
  );
}
