"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const MapBackground = dynamic(() => import("./components/MapBackground"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-0 bg-gradient-to-br from-red-50 to-white"></div>
  ),
});

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <MapBackground />
      {/* Header */}
      <header className="relative z-10 bg-white/95 backdrop-blur-sm shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Drive-in Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-gray-800">Drive-in</span>
          </div>
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-red-600 transition"
            >
              Beranda
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-600 hover:text-red-600 transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-600 hover:text-red-600 transition"
            >
              Terms of Service
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="Drive-in Logo"
            width={120}
            height={120}
            className="mx-auto rounded-full shadow-lg"
          />
        </div>
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Selamat Datang di <span className="text-red-600">Drive-in</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Kursus mengemudi terpercaya dengan instruktur berpengalaman. Raih SIM
          Anda dengan mudah dan aman bersama kami.
        </p>
        <a
          href="https://wa.me/6289542952425"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition inline-flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Hubungi Kami via WhatsApp
        </a>
      </section>

      {/* Features */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Mengapa Memilih Kami?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-red-600">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Instruktur Bersertifikat
            </h3>
            <p className="text-gray-600">
              Semua instruktur memiliki sertifikat resmi dan berpengalaman.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-red-600">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Jadwal Fleksibel
            </h3>
            <p className="text-gray-600">
              Atur jadwal latihan sesuai waktu luang Anda.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-red-600">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Harga Terjangkau
            </h3>
            <p className="text-gray-600">
              Paket kursus dengan harga kompetitif.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative z-10 bg-red-600 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Hubungi Kami</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg text-white">
              <span className="block text-sm text-red-200">Telepon</span>
              <span className="font-semibold">+62 895-4295-24225</span>
            </div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg text-white">
              <span className="block text-sm text-red-200">Email</span>
              <span className="font-semibold">info@drivein.id</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 text-gray-400 text-sm mb-4">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-white transition"
            >
              Terms of Service
            </Link>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Drive-in. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
