import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div>
            <h2 className="text-2xl font-bold">BOXY BuildCon</h2>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-light uppercase tracking-wider mb-6">Contact</h3>
            <div className="space-y-2">
              <p className="text-sm hover:text-[#FF4500] transition-colors">
                <Link href="mailto:info@boxy.design">
                  boxybuildcon@gmail.com
                </Link>
              </p>
              <p className="text-sm">+91 7840049518</p>
            </div>
          </div>

          {/* Social Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-light uppercase tracking-wider mb-6">Social</h3>
            <div className="space-y-2">
              <p className="text-sm hover:text-[#FF4500] transition-colors">
                <Link href="https://www.instagram.com/boxybuildcon/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </Link>
              </p>
              <p className="text-sm hover:text-[#FF4500] transition-colors">
                <Link href="https://www.youtube.com/channel/UCe-BBOoOLvdaOZlYgYCtT1Q" target="_blank" rel="noopener noreferrer">
                  YouTube
                </Link>
              </p>
            </div>
          </div>

          {/* Headquarters Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-light uppercase tracking-wider mb-6">OFFICE</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-medium mb-2">Greater Noida</h4>
                <p className="text-xs text-gray-400">
                A-1111, Tower T3, NX One, Plot No. 17,<br />
                  TECH ZONE 4 —<br />
                  201306 (UP)
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-gray-400">© 2024 BOXY BuildCon, All Rights Reserved</p>
          <p className="text-xs text-gray-400">
            {' '}
            <Link href="#" className="hover:text-[#FF4500] transition-colors">
              Ry
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

