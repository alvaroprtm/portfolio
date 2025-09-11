import React from 'react';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
        {children}
    </div>
);

export default AppLayout;
