const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">NIDAN</h3>
          <p className="text-primary-foreground/80">
            Homeopathy Speciality Clinic - Jaipur, India
          </p>
          <p className="text-sm text-primary-foreground/60 italic">
            "We treat, God cures."
          </p>
          <div className="pt-4 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} NIDAN Homeopathy Clinic. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
