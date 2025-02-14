import Navbar from '@/Components/Navbar';
import './globals.css';
import Footer from '@/Components/footer';
import WhatsApp from '@/Components/WhatsApp';




export const metadata = {

  title: 'My Website',

  description: 'A simple Next.js website with Tailwind CSS',

};


export default function RootLayout({ children }) {
  

  return (

    <html lang="en">

      <body className="bg-gray-100 mt-16">
        <Navbar />

        <main className="">{children}</main>
        <WhatsApp />
        <Footer />
      </body>

    </html>

  );

}