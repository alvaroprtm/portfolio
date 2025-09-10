import React from 'react';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="min-h-screen w-full flex flex-col">
        {children}
    </div>
);

export default AppLayout;
