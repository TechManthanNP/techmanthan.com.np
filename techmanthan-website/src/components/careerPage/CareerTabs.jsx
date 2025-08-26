"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../styles/components/careerPage/_careerTabs.scss";

export default function CareerTabs() {
  const pathname = usePathname();

  return (
    <div className="career-tabs">
      <Link
        href="/career/jobs"
        className={`tab jobs ${
          pathname.includes("/career/jobs") ? "active" : ""
        }`}
      >
        Jobs
      </Link>
      <Link
        href="/career/internships"
        className={`tab internships ${
          pathname.includes("/career/internships") ? "active" : ""
        }`}
      >
        Internships
      </Link>
    </div>
  );
}
