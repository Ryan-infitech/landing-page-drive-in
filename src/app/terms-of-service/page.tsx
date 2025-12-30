import Link from "next/link";
import Image from "next/image";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="PT. Trans Nusa Services Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-gray-800">
              PT. Trans Nusa Services
            </span>
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Beranda
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-600 hover:text-blue-600"
            >
              Privacy Policy
            </Link>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Terms of Service
        </h1>
        <div className="bg-white rounded-xl shadow-md p-8">
          <p className="text-gray-600 mb-6">
            <strong>Terakhir diperbarui:</strong> 1 September 2025
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            1. Penerimaan Ketentuan
          </h2>
          <p className="text-gray-600 mb-4">
            Dengan menggunakan layanan PT. Trans Nusa Services dan anak
            perusahaannya (Drive-in dan Sumatrans), Anda menyetujui untuk
            terikat dengan Syarat dan Ketentuan ini. Jika Anda tidak menyetujui
            ketentuan ini, mohon untuk tidak menggunakan layanan kami.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            2. Deskripsi Layanan
          </h2>
          <p className="text-gray-600 mb-4">
            PT. Trans Nusa Services menyediakan layanan transportasi dan
            logistik melalui anak perusahaan:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
            <li>
              <strong>Drive-in:</strong> Pelatihan mengemudi dengan instruktur
              bersertifikat
            </li>
            <li>
              <strong>Drive-in:</strong> Penjadwalan latihan dan penerbitan
              sertifikat kursus
            </li>
            <li>
              <strong>Sumatrans:</strong> Layanan logistik dan pengiriman barang
            </li>
            <li>
              <strong>Sumatrans:</strong> Tracking pengiriman dan manajemen
              logistik
            </li>
            <li>Notifikasi layanan via WhatsApp</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            3. Pendaftaran dan Akun
          </h2>
          <p className="text-gray-600 mb-4">
            Untuk menggunakan layanan kami, Anda harus:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
            <li>Berusia minimal 17 tahun</li>
            <li>Memberikan informasi yang akurat dan lengkap</li>
            <li>Menjaga kerahasiaan informasi akun Anda</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            4. Pembayaran
          </h2>
          <p className="text-gray-600 mb-4">
            Pembayaran untuk layanan kami dapat dilakukan secara tunai atau
            transfer bank. Semua pembayaran bersifat final dan tidak dapat
            dikembalikan kecuali dalam kondisi tertentu yang diatur oleh
            kebijakan pembatalan kami.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            5. Pembatalan dan Penjadwalan Ulang
          </h2>
          <p className="text-gray-600 mb-4">
            Pembatalan jadwal latihan harus dilakukan minimal 24 jam sebelum
            waktu yang dijadwalkan. Penjadwalan ulang dapat dilakukan dengan
            menghubungi admin kami.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            6. Tanggung Jawab Pengguna
          </h2>
          <p className="text-gray-600 mb-4">
            Pengguna bertanggung jawab untuk:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
            <li>Hadir tepat waktu sesuai jadwal</li>
            <li>Mengikuti instruksi keselamatan dari instruktur</li>
            <li>Memberitahu kondisi kesehatan yang relevan</li>
            <li>Tidak dalam pengaruh alkohol atau obat-obatan terlarang</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            7. Batasan Tanggung Jawab
          </h2>
          <p className="text-gray-600 mb-4">
            PT. Trans Nusa Services dan anak perusahaannya tidak bertanggung
            jawab atas kerugian tidak langsung, insidental, atau konsekuensial
            yang timbul dari penggunaan layanan kami, kecuali yang disebabkan
            oleh kelalaian berat dari pihak kami.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            8. Perubahan Ketentuan
          </h2>
          <p className="text-gray-600 mb-4">
            Kami berhak untuk mengubah Syarat dan Ketentuan ini sewaktu-waktu.
            Perubahan akan berlaku setelah dipublikasikan di halaman ini.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            9. Kontak
          </h2>
          <p className="text-gray-600 mb-4">
            Untuk pertanyaan tentang Syarat dan Ketentuan ini, hubungi kami di:
          </p>
          <ul className="list-none text-gray-600 mb-4 space-y-2">
            <li>
              <strong>WhatsApp:</strong> +62 851-2620-2140
            </li>
            <li>
              <strong>Email:</strong> info@transnusaservices.com
            </li>
          </ul>
        </div>
      </main>

      <footer className="bg-gray-800 py-6 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-400 text-sm">
          © 2025 PT. Trans Nusa Services. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
