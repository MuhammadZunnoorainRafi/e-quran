function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="text-center text-xs md:text-base bg-slate-900 text-slate-50 p-5">
      © Copyright 2023-{year} Al-Rehan Online Islamic Academy, Inc. All rights
      reserved.
    </div>
  );
}

export default Footer;
