import React from "react";
import WizardStep from "./WizardStep";

const OrganizationWizard = () => {
  return (
    <>
      <WizardStep title="Step One (organizaiton)" panelID="panel1">
        <p>This is all the logic for the wizard (organizaiton) step one</p>
      </WizardStep>
      <WizardStep title="Step Two" panelID="panel2" />
      <WizardStep title="Step Three" panelID="panel3" />
    </>
  );
};


export default OrganizationWizard