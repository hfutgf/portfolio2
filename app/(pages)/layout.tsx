'use client';
import Layout from '@/components/layouts/Layout';
import { AnimatePresence, motion } from 'framer-motion';
import Transition from '@/components/ui/Transition';
import { usePathname } from 'next/navigation';
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div key={pathname} className="h-full">
          <NextTopLoader
            color="#2299dd"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299dd,0 0 5px #2299dd"
          />
          {/* <Transition /> */}
          <Layout>{children}</Layout>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
