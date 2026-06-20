import React, { useState, useEffect, useRef } from "react";
import { FaBell } from "react-icons/fa";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const containerRef = useRef(null);

  const baseNotifications = [
    { id: 1, text: "Nuevo proyecto publicado 🚀", read: false },
  ];

  const lastBaseId = baseNotifications.at(-1)?.id ?? null;

  useEffect(() => {
    const saved = localStorage.getItem("notifications");
    let merged = baseNotifications;
    if (saved) {
      const savedMap = new Map(JSON.parse(saved).map((n) => [n.id, n]));
      merged = baseNotifications.map((n) => savedMap.get(n.id) || n);
    }
    setNotifications(merged);
  }, []);

  useEffect(() => {
    if (notifications.length > 0) localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  const unread = notifications.filter((n) => !n.read);
  const read = notifications.filter((n) => n.read);

  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    if (open && unread.length > 0) setNotifications((p) => p.map((n) => ({ ...n, read: true })));
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-label="Notificaciones"
        onClick={() => setOpen((v) => !v)}
        className="relative rounded-full p-2 hover:bg-gray-100 transition-colors"
      >
        <FaBell className="text-lg text-gray-400 cursor-pointer" />
        {unread.length > 0 && lastBaseId && (
          <span className="absolute top-0 right-0 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-500 text-[9px] text-white font-bold">
            {lastBaseId}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-72 rounded-xl border border-gray-200 bg-white shadow-lg shadow-gray-200/60">
          <div className="p-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-3">Notificaciones</h4>
            {read.length > 0 ? (
              <ul className="max-h-48 divide-y divide-gray-100 overflow-auto">
                {read.map((n) => (
                  <li key={n.id} className="py-2.5 text-sm text-gray-500">{n.text}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-400">No hay notificaciones.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
