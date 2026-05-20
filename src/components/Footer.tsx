function Footer() {
  return (
    <footer className="border-t border-black py-8 mt-16">
      <div className="container flex justify-between items-center">
        <p className="text-xs text-gray-500">© Inês Mota 2025</p>
        <div className="flex gap-6">
          <a
            href="https://instagram.com/i.nesart"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-black hover:text-pink-500 transition-colors"
          >
            Instagram
          </a>
          <a
            href="mailto:inesmcadete@hotmail.com"
            className="text-xs text-black hover:text-pink-500 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
