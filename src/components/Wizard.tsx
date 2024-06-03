import React, { useState, createContext, useContext, ReactNode } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import OrganizationWizard from "./OrganizationWizard";
import SingleAccountWizard from "./SingleAccountWizard";


enum AccountMode {
  Single = "Single",
  Organization = "Organization",
}

export type WizardContext = {
  accountMode: AccountMode;
  expanded: string | false;
  handleChange: (
    panel: string
  ) => (event: React.SyntheticEvent<Element, Event>, expanded: boolean) => void;
};

export const useWizardContext = () => useContext(WizardContext);

const WizardContext = createContext<WizardContext>({
  accountMode: AccountMode.Single,
  expanded: "some",
  handleChange:
    (panel: string) =>
    (event: React.SyntheticEvent, newExpanded: boolean) => {},
});

const Wizard = () => {
  const [expanded, setExpanded] = useState<string | false>("panel1");
  const [accountMode, setMode] = useState<AccountMode>(AccountMode.Single);

  const handleAccountChange = (
    event: React.MouseEvent<HTMLElement>,
    newMode: AccountMode
  ) => {
    setMode(newMode);
  };

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <WizardContext.Provider value={{ expanded, handleChange, accountMode }}>
        <ToggleButtonGroup
          color="primary"
          value={accountMode}
          exclusive
          onChange={handleAccountChange}
          aria-label={accountMode}
        >
          <ToggleButton value={AccountMode.Single}>Single Account</ToggleButton>
          <ToggleButton value={AccountMode.Organization}>
            Organization
          </ToggleButton>
        </ToggleButtonGroup>
        {accountMode === AccountMode.Organization ? (
          <OrganizationWizard />
        ) : null}
        {accountMode === AccountMode.Single ? <SingleAccountWizard /> : null}
      </WizardContext.Provider>
    </div>
  );
};

export default Wizard;
