import { IssueStatusBadge } from "@/app/components";
import { Issue } from "@prisma/client";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Table } from "@radix-ui/themes";
import { default as Link, default as NextLink } from "next/link";
import { searchQuery } from "./page";

interface Props {
  searchParams: searchQuery;
  issues: Issue[];
}

const IssueTable = ({ searchParams, issues }: Props) => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {columns.map((column) => (
            <Table.ColumnHeaderCell
              key={column.label}
              className={column.className}
            >
              <NextLink
                href={{
                  query: { ...searchParams, orderBy: column.label },
                }}
              >
                {column.key}
                {searchParams.orderBy === column.label && (
                  <ArrowUpIcon className="inline" />
                )}
              </NextLink>
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {issues.map((issue) => (
          <Table.Row key={issue.id}>
            <Table.Cell>
              <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
              <div className="block md:hidden">
                <IssueStatusBadge status={issue.status} />
              </div>
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              <IssueStatusBadge status={issue.status} />
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              {issue.createdAt.toDateString()}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

const columns: { key: string; label: keyof Issue; className?: string }[] = [
  { key: "Issues", label: "title" },
  { key: "Status", label: "status", className: "hidden md:table-cell" },
  { key: "CreatedAt", label: "createdAt", className: "hidden md:table-cell" },
];

export const columnNames = columns.map((column) => column.label);

export default IssueTable;
