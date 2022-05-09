import styled from '@emotion/styled';

import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

export const StyledAccordion = styled(Accordion)`
  background: #161d2a;
  color: white;
  box-shadow: none;
  border: 1px solid #212a3b;
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  max-height: 48px !important;
  min-height: 48px !important;
`;

export const StyledIcon = styled(ExpandMoreRoundedIcon)`
  color: white;
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
  border-top: 1px solid #212a3b;
  padding: 16px;
`;
