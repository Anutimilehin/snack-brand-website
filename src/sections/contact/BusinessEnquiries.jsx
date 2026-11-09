import ScrollReveal from '../../components/ui/ScrollReveal.jsx'

const enquiryGroups = [
  ['01', 'Retailers'],
  ['02', 'Wholesalers'],
  ['03', 'Distributors'],
  ['04', 'Business partners'],
  ['05', 'General customers'],
]

function BusinessEnquiries() {
  return (
    <div className="business-enquiries">
      <ScrollReveal className="business-enquiries-copy">
        <p className="eyebrow"><span /> Business enquiries</p>
        <h2>There’s room<br />to <em>work together.</em></h2>
        <p className="business-enquiries-intro">
          From stocking the range to exploring a partnership, we welcome conversations from across the food business and from the people who enjoy our products.
        </p>
      </ScrollReveal>

      <ol className="enquiry-group-list">
        {enquiryGroups.map(([number, title], index) => (
          <ScrollReveal as="li" key={number} delay={index * 45}>
            <span>{number}</span><h3>{title}</h3><i className="enquiry-group-marker" aria-hidden="true" />
          </ScrollReveal>
        ))}
      </ol>
      <span className="business-enquiries-watermark" aria-hidden="true">J</span>
    </div>
  )
}

export default BusinessEnquiries
