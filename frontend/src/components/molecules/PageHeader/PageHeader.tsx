import React from "react";
import Button from "../../atoms/Button/Button";

interface PageHeaderProps {
  breadcrumb?: string;
  onAdd?: () => void;
  addLabel?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ breadcrumb, onAdd, addLabel="Agregar" }) => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div>
        {breadcrumb && (
          <p className="text-[11px] text-neutral-500 mb-1">{breadcrumb}</p>
        )}
      </div>
      <Button onClick={onAdd} className="px-5">{addLabel}</Button>
    </div>
  );
};

export default PageHeader;
