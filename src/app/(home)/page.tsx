import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-2xl font-bold mb-4">欢迎使用 Colorify</h1>
      <p>
        你可以在{' '}
        <Link href="/docs" className="font-medium underline">
          这里
        </Link>{' '}
        查看文档。
      </p>
    </div>
  );
}
