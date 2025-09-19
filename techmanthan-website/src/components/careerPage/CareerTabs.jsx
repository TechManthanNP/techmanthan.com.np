"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../styles/components/careerPage/_careerTabs.scss";

export default function CareerTabs() {
  const pathname = usePathname();

  return (
    <div className="career-tabs">
      <Link
        href="/careers/jobs"
        className={`tab jobs ${
          pathname.includes("/careers/jobs") ? "active" : ""
        }`}
      >
        Jobs
      </Link>
      <Link
        href="/careers/internships"
        className={`tab internships ${
          pathname.includes("/careers/internships") ? "active" : ""
        }`}
      >
        Internships
      </Link>
    </div>
  );
}
