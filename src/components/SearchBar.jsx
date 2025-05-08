import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

export default function SearchBar({ onSearch, placeholder }) {
  const [value, setValue] = React.useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(value); // Pass the search term to the parent component
    }
  };

  return (
    <>
      <Autocomplete
        freeSolo
        disableClearable
        options={[]} // No suggestions
        inputValue={value}
        onInputChange={(event, newInputValue) => {
          setValue(newInputValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search movies"
            placeholder={placeholder || 'Search for movies...'} // Use the placeholder prop
            InputProps={{
              ...params.InputProps,
              type: 'search',
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              width: '98%',
              maxWidth: 500,
              margin: '0 auto',
              marginTop: 5,
              display: 'block',
            }}
          />
        )}
      />
    </>
  );
}
