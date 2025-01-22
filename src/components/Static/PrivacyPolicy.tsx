const PrivacyPolicy = () => {
  return (
    <div>
      <main className="max-w-4xl mx-auto p-6 bg-white shadow-lg my-8">
        <h1 className="text-3xl font-bold mb-6">Privacy PrivacyPolicy</h1>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Who we are</h2>
          <p>Our website address is: https://wazobiabite.com.</p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Comments</h2>
          <p>
            When visitors leave comments on the site, we collect the data shown in the comments form, as well as the visitor’s IP address and browser user agent string to help spam detection.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Cookies</h2>
          <p>
            If you leave a comment on our site, you may opt-in to saving your name, email address, and website in cookies. These are for your convenience so you do not have to fill in your details again when you leave another comment.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">What rights you have over your data</h2>
          <p>
            If you have an account on this site or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us.
          </p>
        </section>
      </main>
    </div>
  )
}

export default PrivacyPolicy;
