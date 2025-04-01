import ContactForm from "@/app/ui/sellers/contact-form";
import SellerInfo from "@/app/ui/sellers/seller-info";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  return (
    <div>
      <SellerInfo user_id={id} />
      <ContactForm />
    </div>
  );
}
