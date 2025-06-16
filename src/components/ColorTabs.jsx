import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledTab = styled(Tab)({
    color: '#E6E6FA', // lavender color
    transition: 'all 0.3s ease',
    fontSize: '1.2rem',
    '&:hover': {
        color: '#FFFFFF', // white color on hover
        transform: 'scale(1.05)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    '&.Mui-selected': {
        color: '#FFFFFF',
        fontWeight: 'bold',
    }
});

export default function ColorTabs() {
    const [value, setValue] = React.useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ 
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 2
        }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                sx={{
                    '& .MuiTabs-indicator': {
                        backgroundColor: '#f472b6' // pink-400 color
                    }
                }}
                aria-label="secondary tabs example"
            >
                <StyledTab value="home" label="HOME" />
                <StyledTab value="about" label="ABOUT" />
                <StyledTab value="skills" label="SKILLS" />
                <StyledTab value="achievements" label="ACHIEVEMENTS" />
                <StyledTab value="projects" label="PROJECTS" />
                <StyledTab value="certifications" label="CERTIFICATIONS" />
                <StyledTab value="contact" label="CONTACT" />
            </Tabs>
        </Box>
    );
}