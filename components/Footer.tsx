import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="max-w-7xl mx-auto border-t px-4">
      <div className="flex justify-between py-8">
        <p className="text-primary tracking-tight">
          Designed and Developed by{" "}
          <Link href={"https://pri-3x.github.io/Priyanshu-Portfolio/"} className="font-bold">
            Priyanshu
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Footer;
