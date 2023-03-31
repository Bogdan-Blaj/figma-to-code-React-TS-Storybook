import React from "react";
import be from "./be.svg";
import de from "./de.svg";
import fr from "./fr.svg";
import it from "./it.svg";
import nl from "./NL.svg";
import ru from "./ru.svg";
import us from "./us.svg";

type countryFlagProps = Record<string, string>;

export const countriesFlag: countryFlagProps = {
  BE: be,
  DE: de,
  FR: fr,
  IT: it,
  NL: nl,
  RU: ru,
  US: us,
};
