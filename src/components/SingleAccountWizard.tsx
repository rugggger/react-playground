import React from "react";
import WizardStep from "./WizardStep";

const SingleAccountWizard = () => {
  return (
    <>
      <WizardStep title="Step One (single account)" panelID="panel1">
        <p>This is what is needed for single account</p>
      </WizardStep>
      <WizardStep title="Step Two" panelID="panel2" />
      <WizardStep title="Step Three" panelID="panel3" />
    </>
  );
};


export default SingleAccountWizard