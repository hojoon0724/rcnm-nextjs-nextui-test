import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { Section } from '@/components/Section';
import { Program } from '@/components/Program';
import { ColorTest } from '@/components/ColorTest';
import { FontTest } from '@/components/FontTest';

export default function Home() {
  return (
    <>
      <Section type="full flex flex-col">
        <Program season="0"></Program>
        <ColorTest />
      </Section>
      <FontTest />
    </>
  );
}
