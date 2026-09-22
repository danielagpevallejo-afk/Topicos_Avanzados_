//Lo descargue de teams xdd

export default function UserProfile() {
  return (
    <main className="page">
      <div className="container">
        <article className="card" aria-labelledby="user-name">
          <header className="card__header cluster cluster--spread">
            <div className="cluster">
              <div className="stack stack--tight">

                //Yo agregue el user.nameee ><
                <h1 id="user-name">{user.name}</h1>
                <p className="text-muted">@Bret</p>
              </div>
            </div>

            <span className="badge badge--primary">Usuario #1</span>
          </header>

          <div className="grid">
            <section className="stack" aria-labelledby="contact-title">
              <h2 id="contact-title">Contacto</h2>

              <dl className="meta-list">
                <div className="meta-list__row">
                  <dt className="meta-list__label">(user.email)</dt>
                  <dd className="meta-list__value">
                    <a href="mailto:Sincere@april.biz">Sincere@april.biz</a>
                  </dd>
                </div>

                <div className="meta-list__row">
                  <dt className="meta-list__label">Teléfono</dt>
                  <dd className="meta-list__value">
                    <a href="tel:+17707368031">(user.phone)</a>
                  </dd>
                </div>

                <div className="meta-list__row">
                  <dt className="meta-list__label">Sitio web</dt>
                  <dd className="meta-list__value">
                    <a
                      href="https://hildegard.org"
                      target="_blank"
                      rel="noreferrer"
                    >
                      (user.website)
                    </a>
                  </dd>
                </div>
              </dl>
            </section>

            <section className="stack" aria-labelledby="address-title">
              <h2 id="address-title">Dirección</h2>

              <dl className="meta-list">
                <div className="meta-list__row">
                  <dt className="meta-list__label">Calle</dt>
                  <dd className="meta-list__value">(user.addres.street)</dd>
                </div>

                <div className="meta-list__row">
                  <dt className="meta-list__label">Suite</dt>
                  <dd className="meta-list__value">(ser.addres.suite)</dd>
                </div>

                <div className="meta-list__row">
                  <dt className="meta-list__label">Ciudad</dt>
                  <dd className="meta-list__value">Gwenborough</dd>
                </div>

                <div className="meta-list__row">
                  <dt className="meta-list__label">Código postal</dt>
                  <dd className="meta-list__value">()user.addres.zipcode</dd>
                </div>

                <div className="meta-list__row">
                  <dt className="meta-list__label">Coordenadas</dt>
                  <dd className="meta-list__value">
                    <a
                      href="https://www.google.com/maps?q=-37.3159,81.1496"
                      target="_blank"
                      rel="noreferrer"
                    >
                      (user.addres.geo.lat) {user.addres.geo.log}
                    </a>
                  </dd>
                </div>
              </dl>
            </section>
          </div>

          <footer className="card__footer stack">
            <div className="cluster cluster--spread">
              <div className="stack stack--tight">
                <span className="meta-list__label">Empresa</span>
                <h2>user.company.name</h2>
              </div>

              <span className="badge badge--success">Empresa activa</span>
            </div>

            <blockquote>
              
              {UserProfile.company.by}
              
            </blockquote>

            <p className="text-muted">harness real-time e-markets</p>
          </footer>
        </article>
      </div>
    </main>
  );
}