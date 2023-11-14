import { OrganizationList } from "@clerk/nextjs";

export default function SelectAccount() {
  return (
    <OrganizationList
      // FEATURE:create page for parsonal user
      // afterSelectPersonalUrl="/organization/:id"
      hidePersonal={true}
      afterSelectOrganizationUrl="/organization/:id"
      afterCreateOrganizationUrl="/organization/:id"
    />
  );
}
