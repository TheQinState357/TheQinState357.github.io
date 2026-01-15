"use client";

import { useEffect, useState } from "react";

interface FooterProps {
  lastUpdated?: string;
}

export default function Footer({ lastUpdated }: FooterProps) {
  const [clientDate, setClientDate] = useState<string>("");

  useEffect(() => {
    setClientDate(
        new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          // 推荐固定时区，避免不同机器显示不同日期
          timeZone: "UTC",
        })
    );
  }, []);

  const displayDate = lastUpdated ?? clientDate; // 先用传入的；没有就用客户端动态

  return (
      <footer className="border-t border-neutral-200/50 bg-neutral-50/50 dark:bg-neutral-900/50 dark:border-neutral-700/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-xs text-neutral-500">
              Last updated: {displayDate}
            </p>
          </div>
        </div>
      </footer>
  );
}
