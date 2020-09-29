import { shell } from "electron";
import React from "react";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import DiscordIcon from "../../components/DiscordIcon";
import SettingsIcon from "@material-ui/icons/Settings";
import "../../styles/layout/layout.scss";
import useStores from "../../../hooks/useStores";
import { observer } from "mobx-react";

import { useLocale } from "../../i18n";
import { Menu } from "../../../interfaces/i18n";

export const Layout: React.FC = observer(({ children }) => {
  const { routerStore } = useStores();

  const { locale } = useLocale<Menu>("menu");

  return (
    <>
      <main>{children}</main>
      <nav className="hero">
        <ul>
          <li>
            <Button
              startIcon={<HomeIcon />}
              onClick={() => {
                shell.openExternal("https://forum.nine-chronicles.com");
              }}
            >
              {locale("Forum")}
            </Button>
          </li>
          <li>
            <Button
              startIcon={<DiscordIcon />}
              onClick={() => {
                shell.openExternal("https://discord.gg/planetarium");
              }}
            >
              {locale("Discord")}
            </Button>
          </li>
          <li>
            <Button
              startIcon={<SettingsIcon />}
              className="settings-icon"
              disabled={routerStore.location.pathname === "/config"}
              onClick={() => {
                routerStore.push("/config");
              }}
            >
              {locale("Settings")}
            </Button>
          </li>
        </ul>
      </nav>
    </>
  );
});
