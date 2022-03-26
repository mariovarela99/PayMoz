import React from "react";
import { FormTag } from "./styles";

function LoginForm() {
  return (
    <>
      <FormTag>
        <h2> Iniciar Sessão </h2>

        <fieldset>
          <select name="ZoneCode" id="ZoneCode">
            <option value="Angola"> +244 </option>
            <option value="Portugal"> +351 </option>
          </select>

          <input
            type="number"
            placeholder="Número de telemóvel"
            id="phone-number"
          />
        </fieldset>

        <button type="button"> Continuar </button>
      </FormTag>
    </>
  );
}

export default LoginForm;
