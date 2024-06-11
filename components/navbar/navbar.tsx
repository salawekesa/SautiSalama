import { Button, Dropdown, Link, Navbar, Switch, Text } from '@nextui-org/react';
import React from 'react';
import { ModalLogin } from '../modal';
import { icons } from './icons';
import { AcmeLogo } from './logo';
import { useTheme as useNextTheme } from 'next-themes';
import { useTheme } from '@nextui-org/react';
import { GithubIcon } from '../icons/GithubIcon';
import Image from 'next/image'; // Import Image component from Next.js

export const Nav = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const collapseItems = ['Legal', 'Health', 'Shelter', 'Community'];
  return (
    <Navbar isBordered css={{
      'overflow': 'hidden',
      '& .nextui-navbar-container': {
        background: '$background',
        borderBottom: 'none'
      }
    }}>
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
      
        {/*Logo and text */}
        <Link href="/" className='flex gap-2 flex-center'>
          <Image
            src="/assets/images/logg.png"
            alt="Sauti Salama"
            width={100}
            height={100}
            className='object-contain'
          />
         {/* <Text b color="inherit" hideIn="xs">
               ACME
         </Text> */}
        </Link>

        {/* Dropdown Menu */}
        <Navbar.Content hideIn="sm" css={{ pl: '6rem' }}>
          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: 'center',
                  svg: { pe: 'none' }
                }}
                iconRight={icons.chevron}
                ripple={false}
              >
                Resources
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="ACME features"
              css={{
                '$$dropdownMenuWidth': '340px',
                '$$dropdownItemHeight': '70px',
                '& .nextui-dropdown-item': {
                  'py': '$4',
                  'svg': {
                    color: '$secondary',
                    mr: '$4'
                  },
                  '& .nextui-dropdown-item-content': {
                    w: '100%',
                    fontWeight: '$semibold'
                  }
                }
              }}
            >
              {/* Dropdown Items */}
              {collapseItems.map(item => (
                <Dropdown.Item key={item} showFullDescription description={`Access ${item.toLowerCase()}`}>
                  {item}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          {/* Navbar Links */}
          {/* <Navbar.Link  href="#">Donate</Navbar.Link> */}
          <Navbar.Link isActive href="/Report">Report</Navbar.Link>
          {/* <Navbar.Link href="#">Company</Navbar.Link> */}
        </Navbar.Content>
      </Navbar.Brand>

      {/* Navbar Collapse */}
      <Navbar.Collapse>
        {/* Collapse Items */}
        {collapseItems.map(item => (
          <Navbar.CollapseItem key={item}>
            <Link color="inherit" css={{ minWidth: '100%' }} href="#">
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
        {/* GitHub Icon */}
        <Navbar.CollapseItem>
          {/* <Link color="inherit" css={{ minWidth: '100%' }} target="_blank" href="https://github.com/Siumauricio/landing-template-nextui">
            <GithubIcon />
          </Link> */}
        </Navbar.CollapseItem>
        {/* Theme Switch */}
        <Navbar.CollapseItem>
          <Switch checked={isDark} onChange={e => setTheme(e.target.checked ? 'dark' : 'light')} />
        </Navbar.CollapseItem>
      </Navbar.Collapse>

      {/* Navbar Content */}
      <Navbar.Content>
        {/* Modal Login */}
        <ModalLogin />
        {/* Start Free Trial Button */}
        {/* <Navbar.Item>
          <Button auto flat href="#">Start free trial</Button>
        </Navbar.Item> */}
        {/* GitHub Icon (for larger screens) */}
        {/* <Navbar.Item hideIn={'xs'}>
          <Link color="inherit" css={{ minWidth: '100%' }} target="_blank" href="">
            <GithubIcon />
          </Link>
        </Navbar.Item> */}
        {/* Theme Switch (for larger screens) */}
        <Navbar.Item hideIn={'xs'}>
          <Switch checked={isDark} onChange={e => setTheme(e.target.checked ? 'dark' : 'light')} />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};
