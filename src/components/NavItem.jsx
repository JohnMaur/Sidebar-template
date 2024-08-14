import React, { useState } from 'react';
import Tooltip from '../components/Tooltip';

const NavItem = ({ isNavCollapsed, icon, iconHovered, tooltipText, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>


      <a href={link} className="flex items-center max-sm:py-2">
        <div
          className="relative navlink-style flex-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={isHovered ? iconHovered : icon}
            alt={`${tooltipText} Icon`}
            width={18}
            height={18}
          />
          {!isNavCollapsed && <p className="text-sm font-palanquin ml-3">{tooltipText}</p>}

        </div>
      </a>
      {isNavCollapsed && isHovered && (
        <Tooltip text={tooltipText} position="right" showTooltip={true} />
      )}
    </div>
  );
};

export default NavItem;
