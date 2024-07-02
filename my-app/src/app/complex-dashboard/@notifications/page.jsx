import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div>Notifications</div>
      <Link href="/complex-dashboard/archived">Archived</Link>
    </>
  );
};

export default page;
