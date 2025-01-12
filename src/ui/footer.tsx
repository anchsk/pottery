export default function Footer() {
  return (
    <footer
      className="w-full h-full p-4
  flex justify-between"
    >
      <div>Pot Pot Pottery</div>
      <div className="flex flex-row gap-4">
        <a
          href="https://instagram.com/potpotpottery"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
}
