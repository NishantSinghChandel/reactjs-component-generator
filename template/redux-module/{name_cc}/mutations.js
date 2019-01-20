const set{{name_pc}}List = data => ({
    type: "SET_{{name_uc}}_LIST",
    data
  });

  const setActive{{name_pc}} = data => ({
    type: "SET_ACTIVE_{{name_uc}}",
    data
  });
  
  
  export const mutation = {
    set{{name_pc}}List,
    setActive{{name_pc}}
  };
  