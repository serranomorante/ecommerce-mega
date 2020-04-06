import React from "react";
import { Form, Input, SelectWrapper, Select, Button } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  className?: string;
}

const SearchBox: React.FC<Props> = ({ className }) => {
  return (
    <Form className={className}>
      <Input placeholder="Buscar producto..." />
      <SelectWrapper>
        <Select>
          <option value={1}>Todos</option>
          <option value={2}>Dos</option>
          <option value={3}>Tres</option>
          <option value={4}>Cuatro</option>
        </Select>
        <FontAwesomeIcon icon="chevron-down" />
        <Button>
          <FontAwesomeIcon icon="search" />
        </Button>
      </SelectWrapper>
    </Form>
  );
};

export default SearchBox;
