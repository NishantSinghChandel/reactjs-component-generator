const set{{name_pc}}List = data => ({
    type: "SET_{{name_uc}}_LIST",
    data
  });

  const setActive{{name_pc}} = data => ({
    type: "SET_ACTIVE_{{name_uc}}",
    data
  });
  
  const set{{name_pc}}ListData = data => ({
    type: "SET_{{name_uc}}_LIST_DATA",
    data
  });
  
  const remove{{name_pc}}FromList = data => ({
    type: "REMOVE_{{name_uc}}_FROM_LIST",
    data
  });
  
  const setUpdate{{name_pc}}ListData = data => ({
    type: "SET_UPDATE_{{name_uc}}_LIST_DATA",
    data
  });

  const isFetchingData = data => ({
    type: "IS_FETCHING_DATA",
    data
  });
  

  export const mutation = {
    set{{name_pc}}List,
    setActive{{name_pc}},
    set{{name_pc}}ListData,
    remove{{name_pc}}FromList,
    setUpdate{{name_pc}}ListData,
    isFetchingData
  };
  