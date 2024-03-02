import {
    TextInput,
    UnstyledButton,
    Badge,
    Text,
    Group,
    ActionIcon,
    Tooltip,
    rem,
  } from '@mantine/core';
  import { IconSearch, IconPlus, IconNote, IconStar, IconSettings } from '@tabler/icons-react';
  import classes from './NavSearch.module.css';
  
  const links = [
    { icon: IconNote, label: 'Notes', notifications: 3 },
    { icon: IconStar, label: 'Favourites', notifications: 4 },
    { icon: IconSettings, label: 'Settings' },
  ];
  
  const collections = [
    { emoji: '👍', label: 'Sales' },
    { emoji: '🚚', label: 'Deliveries' },
    { emoji: '💸', label: 'Discounts' },
    { emoji: '💰', label: 'Profits' },
    { emoji: '✨', label: 'Reports' },
    { emoji: '🛒', label: 'Orders' }
  ];
  
  export function NavbarSearch() {
    const mainLinks = links.map((link) => (
      <UnstyledButton key={link.label} className={classes.mainLink}>
        <div className={classes.mainLinkInner}>
          <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
          <span>{link.label}</span>
        </div>
        {link.notifications && (
          <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
            {link.notifications}
          </Badge>
        )}
      </UnstyledButton>
    ));
  
    const collectionLinks = collections.map((collection) => (
      <a
        href="#"
        onClick={(event) => event.preventDefault()}
        key={collection.label}
        className={classes.collectionLink}
      >
        <span style={{ marginRight: rem(9), fontSize: rem(16) }}>{collection.emoji}</span>{' '}
        {collection.label}
      </a>
    ));
  
    return (
      <nav className={classes.navbar}>
        {/* <div className={classes.section}>
          <UserButton />
        </div> */}
  
        <TextInput
          placeholder="Search"
          size="xs"
          leftSection={<IconSearch style={{ width: rem(12), height: rem(12) }} stroke={1.5} />}
          rightSectionWidth={70}
        //   rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
          styles={{ section: { pointerEvents: 'none' } }}
          mb="sm"
        />
  
        <div className={classes.section}>
          <div className={classes.mainLinks}>{mainLinks}</div>
        </div>
  
        <div className={classes.section}>
          <Group mb={"xs"} className={classes.collectionsHeader} justify="space-between">
            <Text size="xs" fw={500} c="dimmed">
              Collections
            </Text>
            <Tooltip label="Create collection" withArrow position="right">
              <ActionIcon variant="default" size={18}>
                <IconPlus style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ActionIcon>
            </Tooltip>
          </Group>
          <div className={classes.collections}>{collectionLinks}</div>
        </div>
      </nav>
    );
  }