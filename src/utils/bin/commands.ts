// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  return `Welcome! Here are all the available commands:
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
whoami 
certifications  
email  
linkedin
resume 
tryhackme   
ls  
cd  
date  
sudo
`;
};

export const certifications = async (args: string[]): Promise<string> => { 
   return `
    <div style="display: flex; gap: 10px;">
    <img src="https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-JHI8HSUYRV.png" style="width: 300px; height: 200px;" />
    <img src="https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-GIHXHCVN9T.png" style="width: 300px; height: 200px;" />
    <img src="https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-BGXQ6HR014.png" style="width: 300px; height: 200px;" />
    <img src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~AJDFPR8BZP8P/CERTIFICATE_LANDING_PAGE~AJDFPR8BZP8P.jpeg" style="width: 300px; height: 200px;" />
    </div>`
};

export const resume = async (args: string[]): Promise<string> => {
  
  return 'For privacy purposes, if you would like to view my resume, please contact me via LinkedIn or email (Gmail). Use the following commands:\n - "linkedin" for LinkedIn\n - "email" for email';
};

export const tryhackme = async (args: string[]): Promise<string> => {
  window.open(`https://tryhackme.com/p/Unkn0wnB0y`);

  return 'Opening tryhackme link...';
};
// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/soufiane-lahlali-52a85a241/`);

  return 'Opening linkedin...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `I'm Soufiane Lahlali 24-year-old🚀
💻 Cybersecurity Enthusiast & Penetration Tester | 🔍 Ethical Hacker | 🎯 Security Consultant

🔹 Passionate about cybersecurity, constantly honing my skills on TryHackMe & HackTheBox.
🔹 Specialized in Web Pentesting, Active Directory Exploitation, and Red Team Tactics.
🔹 Pursuing CRTA certification to deepen my AD pentesting expertise.
📌 Open to roles as a Cybersecurity Consultant or Penetration Tester.`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `Desktop/
Images/
Videos/
Private_dir/`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `Just kidding! Those directories aren’t real.
This is just a portfolio. Type a command to see what you can actually do!`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  
  return `Permission denied: Nice try! But this is just a portfolio. 😆`;
};

// Banner
export const banner = (args?: string[]): string => {   
  return `
  <img src="https://pbs.twimg.com/profile_images/1907100117838016512/j4OBDbtx_400x400.jpg" width="100" height="100" style="border-radius: 50%; float: left; margin-right: 10px;">
  <pre>
╦ ╦┌─┐┬  ┌─┐┌─┐┌┬┐┌─┐  ┌┬┐┌─┐  ┌┬┐┬ ┬  ┬ ┬┌─┐┬─┐┬  ┌┬┐ 
║║║├┤ │  │  │ ││││├┤    │ │ │  │││└┬┘  ││││ │├┬┘│   ││ 
╚╩╝└─┘┴─┘└─┘└─┘┴ ┴└─┘   ┴ └─┘  ┴ ┴ ┴   └┴┘└─┘┴└─┴─┘─┴┘ 
  </pre>
  <p>Type 'help' to see the list of available commands.</p>
  `;
};


