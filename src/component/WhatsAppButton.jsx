import React from "react";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/918368082337?text=Hello%20Angelic%20Luxe%20Makeovers%2C%20I%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center animate-bounce"
        >
            {/* WhatsApp Icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-8 h-8"
            >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.12.553 4.19 1.6 6.01L0 24l6.17-1.61A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.94 0-3.82-.52-5.46-1.51l-.39-.23-3.66.96.98-3.57-.25-.41A9.93 9.93 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm4.93-7.07c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.99 2.65 1.13 2.83c.14.18 1.95 2.98 4.73 4.18.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.61-.66 1.84-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.52-.32z" />
            </svg>
        </a>
    );
}