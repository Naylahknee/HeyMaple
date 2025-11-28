import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { UNIVERSITIES, searchSchools } from "@/lib/uscData";

interface SchoolComboboxProps {
  value: string;
  universityId: string;
  onChange: (schoolId: string) => void;
  onOpenChange?: (open: boolean) => void;
  error?: string;
}

export function SchoolCombobox({ value, universityId, onChange, onOpenChange, error }: SchoolComboboxProps) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const selectedUniversity = UNIVERSITIES.find(u => u.id === universityId);
  const selectedSchool = selectedUniversity?.schools.find(s => s.id === value);
  const filteredSchools = useMemo(
    () => searchSchools(searchQuery, universityId),
    [searchQuery, universityId]
  );

  const handleSelect = (schoolId: string) => {
    onChange(schoolId);
    setOpen(false);
    setSearchQuery("");
  };

  return (
    <Popover open={open} onOpenChange={(isOpen) => {
      setOpen(isOpen);
      onOpenChange?.(isOpen);
    }}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={!universityId}
          className={cn("w-full justify-between", error && "border-red-500")}
        >
          {selectedSchool ? (
            <span className="truncate">{selectedSchool.abbreviation} - {selectedSchool.name}</span>
          ) : (
            <span className="text-muted-foreground">{universityId ? "Select your school..." : "Select university first"}</span>
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <div className="p-3 border-b">
          <Input
            placeholder="Search schools... (type name or abbreviation)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
            className="h-8"
          />
        </div>
        <div className="max-h-60 overflow-y-auto">
          {filteredSchools.length === 0 ? (
            <div className="p-4 text-center text-sm text-muted-foreground">
              No schools found
            </div>
          ) : (
            filteredSchools.map((school) => (
              <button
                key={school.id}
                onClick={() => handleSelect(school.id)}
                className={cn(
                  "w-full text-left px-4 py-3 text-sm hover:bg-muted transition-colors flex items-center justify-between",
                  value === school.id && "bg-primary/10"
                )}
              >
                <div>
                  <p className="font-medium">{school.abbreviation}</p>
                  <p className="text-xs text-muted-foreground">{school.name}</p>
                </div>
                {value === school.id && <Check className="h-4 w-4 text-primary" />}
              </button>
            ))
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
