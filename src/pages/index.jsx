import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { Section } from '@/components/Section';
import { Program } from '@/components/Program';
import { ColorTest } from '@/components/ColorTest';
import { Header } from '@/components/Header';
import { FontTest } from '@/components/FontTest';

export default function Home() {
  return (
    <>
      <Header />
      <Section type="full flex flex-col">
        <Program season="0"></Program>
        <ColorTest />
      </Section>
      <FontTest />
    </>
  );
}
